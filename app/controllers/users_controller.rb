class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_user

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user, status: :found
    rescue ActiveRecord::RecordNotFound 
        render json: {errors: "User not found"}, status: :not_found
    end

    def create
        new_user = User.new(user__create_params)
            # name: params[:name],
            # username: params[:username],
            # email: params[:email],

            # password: params[:password],
        if new_user.valid?

            new_user.save

            render json: new_user, status: :created
        else
            render json: {errors: new_user.errors.full_messages}, status: :unprocessable_entity
        end

    end

    private

    def user__create_params
        params.permit(:name, :username, :email, :password)

     #   params.require(:user).permit(:name, :username, :email, :password)

    end

    def user__update_params
        params.permit(:name, :username, :email, :password)

     #   params.require(:user).permit(:name, :username, :email, :password)

    end

    def invalid_user (invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def user_not_found
        render json: {error: "User Not Found"}, status: :not_found
    end

end
