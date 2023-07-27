class UsersController < ApplicationController
skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized            
        end    
    end


   def update
      user = User.find_by(id: session[:user_id])

      if user && user.update(user_params)
        render json: user, status: :ok
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end


  def destroy
    user = User.find_by(id: session[:user_id])

    if user
      user.destroy
      session.destroy
      render json: { message: "User successfully deleted" }, status: :ok
    else
      render json: { errors: ["User not found"] }, status: :not_found
    end
  end
  
private

    def user_params
        params.permit(:name, :avatar_url, :username, :password, :email, :password_confirmation)
    end

end
