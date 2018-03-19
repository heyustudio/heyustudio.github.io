# Import file "topic garry"
sketch = Framer.Importer.load("imported/topic%20garry@2x", scale: 1)

#garry1
scroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	parent: sketch.topic_garry_1
sketch.feed.parent = scroll.content
scroll.placeBehind(sketch.createBtn)

sketch.createBtn.y = Screen.height - sketch.createBtn.height

#garry2
scroll2 = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	parent: sketch.topic_garry_2
sketch.feed2.parent = scroll2.content
scroll2.placeBehind(sketch.createBtn2)

sketch.createBtn2.y = Screen.height - sketch.createBtn2.height

# Set up FlowComponent
flow = new FlowComponent
flow.showNext(sketch.topic_garry_1, scroll:false)
sketch.navBar.onClick ->
	flow.showNext(sketch.topic_garry_2, scroll:false)
sketch.navBar2.onClick ->
	flow.showNext(sketch.topic_garry_1, scroll:false)