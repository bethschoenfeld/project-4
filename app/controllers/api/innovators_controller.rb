class Api::InnovatorsController < ApplicationController
  def index
    @innovators = Innovator.all
    render json: @innovators
  end

  def create
    @innovator = Innovator.create!(innovator_params)

    render json: @innovator
  end

  def show
    @innovator = Innovator.find(params[:id])

    render json: @innovator
  end

  def update
    @innovator = Innovator.find(params[:id])
    @innovator.update!(innovator_params)

    render json: @innovator
  end

  def destroy
    @innovator = Innovator.find(params[:id]).delete

    render status: :ok
  end

  private

  def innovator_params
    params.require(:innovator).permit(:innovatorname,  :email, :picture)
  end
end
