class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    #create a session on user login
    #destroy session on user logout

    #login
    def create
        user = User.find_by(username: params[:username])
        # byebug
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end 

    #logout
    def destroy
        byebug
        session.destroy
        head :no_content
    end
end