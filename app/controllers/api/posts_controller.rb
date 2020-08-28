class Api::PostsController < ApplicationController
    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render :show
            # render :index
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        
        if @post.post_type == "photo" && @post.update(post_params)
            
            render json: @post
        elsif @post.update(post_params)
            render json: @post
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.includes(:author, :likes).all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        if @post.reblog_post_id
            @original_post = Post.find(@post.reblog_post_id)
        end
        render :show
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :post_type, :author_id, :photo, :reblog_post_id, :reblog_description)
    end
end
