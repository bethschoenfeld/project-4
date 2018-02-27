class Api::EventsController < ApplicationController
  def index
    @events = Events.all
    render json: @events
  end

  def create
    @event = Events.create!(event_params)

    render json: @event
  end

  def show
    @event = Events.find(params[:id])

    render json: @event
  end

  def update
    @event = Events.find(params[:id])
    @event.update!(event_params)

    render json: @event
  end

  def destroy
    @event = Events.find(params[:id]).delete

    render status: :ok
  end

  private

  def event_params
    params.require(:event).permit(:eventname,  :email, :picture)
  end
end
