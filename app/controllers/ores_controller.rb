class OresController < ApplicationController

    def index
        render json: Ore.all, status: :ok
    end

    def show
        ore = Ore.find_by(id: params[:id])
        render json: ore, status: :found
    rescue ActiveRecord::RecordNotFound 
        render json: {errors: "Ore not found"}, status: :not_found
    end

end
