class CommentsController < ApplicationController

    def create
      # byebug
        match = @current_user.matches.find(params[:match_id])
        comment = match.comments.new(comment_params)
        comment.user_id = @current_user.id 
    
        if 
          render json: comment, status: :created
        else
          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

    
      def show
        comment = @current_user.comments.find(params[:id])
        render json: comment
      end


      def update
        comment = @current_user.comments.find(params[:id])

        if comment.update(comment_params)
          render json: comment
        else
          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
      end


      def destroy
        comment = @current_user.comments.find(params[:id])
        comment.destroy
        head :no_content
      end


      private
    
      def comment_params
        params.require(:comment).permit(:content)
      end

end


