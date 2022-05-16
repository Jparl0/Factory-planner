class ApplicationController < ActionController::API
  include ActionController::Cookies


  # def login

  #   user_to_find_to_login = User.find_by( params[:username])

  #   if user_to_find_to_login
  #     if user_to_find_to_login.authenticate( params[:password])
  #       render json: user_to_find_to_login
  #     else
  #       render json: {error: "Incorrect password "}
  #     end

  #   else
  #     render json: {error: "Username or password don't match"}
  #   end

  # end

end
