class ConfessionsController < ApplicationController
  def index
    confession = Confession.all.order(created_at: :desc)
    render json: confession
  end

  def create
    @result = `python /home/johanna/hnr2020/Confess.py #{params[:confession_body]}`
    puts "before" 
    puts @result 
    puts @result.class 
    puts "after" 
    confession = Confession.create(confession_body: @result, category: params[:category]) 
    if confession
      render json: confession
    else
      render json: confession.errors
    end
  end

  def show
    if confession
      render json: confession
    else
      render json: confession.errors
    end
  end

  private

  def confession_params
    params.permit(:confession_body, :category)
  end

  def confession
    @confession ||= Confession.find(params[:id])
  end
end
