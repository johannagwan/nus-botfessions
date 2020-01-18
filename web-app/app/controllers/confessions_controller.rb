class ConfessionsController < ApplicationController
  def index
    confession = Confession.all.order(created_at: :desc)
    render json: confession
  end

  def create
    confession = Confession.create(confession_params)
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
