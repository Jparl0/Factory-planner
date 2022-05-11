class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :found
    rescue ActiveRecord::RecordNotFound 
        render json: {errors: "User not found"}, status: :not_found
    end


end
