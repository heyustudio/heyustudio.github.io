# The FlowComponent is useful for turning (imported) static screens into interactive flows.
# In the example below, we set up screen layers and style them.
# Then we simply add them to the FlowComponent using showNext.
# Learn more here: framer.com/docs/#flow.flowcomponent

# Set up screen layers
screenA = new Layer
	size: Screen.size 
	backgroundColor: "#8DF"
	
screenB = new Layer
	size: Screen.size 
	backgroundColor: "#0AF"
	
screenC = new Layer
	size: Screen.size 
	backgroundColor: "05F"

# Add labels to screens
labelA = new TextLayer
	text: "A"
	parent: screenA 
	point: Align.center
	color: "#FFF"
	
labelB = new TextLayer
	text: "B"
	parent: screenB 
	point: Align.center
	color: "#FFF"
	
labelC = new TextLayer
	text: "C"
	parent: screenC 
	point: Align.center
	color: "#FFF"

# Set up FlowComponent
flow = new FlowComponent 
flow.showNext(screenA)

# Switch on click
screenA.onClick ->
	flow.showNext(screenB)

screenB.onClick ->
	flow.showNext(screenC)
	
screenC.onClick ->
	flow.showNext(screenA)