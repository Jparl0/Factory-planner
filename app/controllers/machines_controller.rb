class MachinesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :machine_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_machine_data

    def index
        render json: Machine.all, status: :ok
    end

    def show
        machine_to_find = Machine.find_by!(id: params[:id])
        render json: machine, status: :found
    # rescue ActiveRecord::RecordNotFound 
    #     render json: {errors: "Machine not found"}, status: :not_found
    end

    def create
        machine = Machine.create!(create_machine_params)
        render json: machine, status: :created
    end

    def update
        machine_to_find = Machine.find_by(id: params[:id])
    #    machine_to_find = Machine.find_by!(id: params[:id])

        if machine_to_find

            if machine_to_find.update(update_machine_params)
                render json: machine_to_find, status: :accepted
            else
                render json: { errors: machine_to_find.errors.full_messages}
            end
        
        else
            machine_not_found
        end
    end

    #   Not giving proper error yet on incorrect param submission
    #   rescue ActiveRecord::RecordInvalid => invalid
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end

    def destroy
        machine = Machine.find_by!(id: params[:id])
        machine.destroy
        render json: {}, status: :no_content
    end

    private

    # def find_machine

    # end

    def create_machine_params
        params.permit(:name, :voltage, :input, :output)
    end

    def update_machine_params
        params.permit(:name, :input, :output)
    end

    def machine_not_found
        render json: { error: "Machine not found" }, status: :not_found
    end

    def invalid_machine_data(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
