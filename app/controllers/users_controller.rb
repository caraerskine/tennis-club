class UsersController < ApplicationController
skip_before_action :authorize, only: [:create]
#index too? 

#POST /signup
    def create
        user = User.create(user_params)
        # byebug
        # user.avatar_url ||= 'https://static01.nyt.com/images/2015/09/13/sports/DOG-slam/DOG-slam-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
        
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized
        end
    end

#GET /me 
#get current user, render it in json 
    def show
        user = User.find_by(id: session[:user_id])
        # byebug
        if user
            render json: user, status: :ok
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized            
        end    
    end

    # PATCH /me
  def update
    user = User.find_by(id: session[:user_id])

    if user && user.update(user_params)
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /me
  def destroy
    user = User.find_by(id: session[:user_id])

    if user
      user.destroy
      session.destroy
    #   session[:user_id] = nil # Clear the session after deleting the user
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
