class MachinesController < ApplicationController

    def index
        render json: Machine.all, status: :ok
    end

    def show
        machine = Machine.find_by(id: params[:id])
        render json: machine, status: :found
    rescue ActiveRecord::RecordNotFound 
        render json: {errors: "Machine not found"}, status: :not_found
    end

end
