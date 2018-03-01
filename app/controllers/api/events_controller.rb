class Api::EventsController < ApplicationController
  def index
    @events = Innovator.find(params[:innovator_id]).events
    render json: @events
  end

  def create
    @event = Event.create!(event_params)

    render json: @event
  end

  def show
    @event = Event.find(params[:id])

    render json: @event
  end

  def update
    @event = Event.find(params[:id])
    @event.update!(event_params)

    render json: @event
  end

  def destroy
    @event = Event.find(params[:id]).delete

    render status: :ok
  end

  private

  def event_params
    params.require(:event).permit(:workshop, :oneonone, :description, :picture, :innovator_id, :user_id)
  end
end
