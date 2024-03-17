# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    # `attr_accessor` - makes more methods, stores the model, number of wheels and speed.
  attr_accessor :model, :wheels, :current_speed
    # methods, setters. Set's all the attributes
    def initialize(model)
      @model = model
      @wheels = 2
      @current_speed = 0
    end
    # This increases the current speed
    def pedal_faster(speed_increase)
      @current_speed += speed_increase
    end
    #This equation calculates the new speed but also not allowing it to go lower than zero.
    def brake(speed_decrease)
      @current_speed = [@current_speed - speed_decrease, 0].max
    end
    
    #This is just generating the sentence/string, and using string interpolation.
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{current_speed} mph."
    end
end