class CommentsController < ApplicationController

    def create
        if @current_user.id === comment_params[:user_id]
          comment = Comment.create!(comment_params)
          render json: comment, status: :created
        else
          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        comment = @current_user.comments.find(params[:id])
        render json: comment
      end

      private
    
      def comment_params
        params.require(:comment).permit(:content, :match_id, :user_id)
      end

end


