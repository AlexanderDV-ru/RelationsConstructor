var elementsCount=0
workspace.ondblclick=function(e)
{
	var newEl=document.createElement('div')
	newEl.style.left=e.pageX + 'px'
	newEl.style.top=e.pageY + 'px'
	newEl.className="element"
	newEl.id="element"+elementsCount
	elementsCount++
	workspace.appendChild(newEl)
	
	var linesCount=0
	
	
	var name=document.createElement("input")
	name.value="New element"
	name.style.display='block'
	newEl.appendChild(name)
	
	var color=document.createElement("input")
	color.value="white"
	color.oninput=function(e)
	{
		newEl.style.background=color.value || 'white'
		for(i=0;i<0+linesCount;i++)
		{
			document.getElementById(newEl.id+'-line'+i).setAttribute('stroke',newEl.style.background)
		}
	}
	color.oninput()
	newEl.appendChild(color)
	
	var connector=document.createElement("div")
	connector.innerText="Connections"
	connector.onmousedown = function(e) {
		var i=linesCount
		svg.innerHTML=svg.innerHTML+'<line id="'+newEl.id+'-line'+i+'" stroke="'+color.value+'" x1="'+newEl.style.left+'" y1="'+newEl.style.top+'" x2="10" y2="20"></line>'
		
		linesCount++
		//var coords = getCoords(newEl)
		//var shiftX = e.pageX - coords.left
		//var shiftY = e.pageY - coords.top
	
		//moveAt(e)
	
		//mover.style.zIndex = 1000 // над другими элементами
	
		//function moveAt(e) {
		//	//newEl.style.left = e.pageX - shiftX + 'px'
		//	//newEl.style.top = e.pageY - shiftY + 'px'
		//}
		
		workspace.onmousemove = function(e) {
			document.getElementById(newEl.id+'-line'+i).setAttribute('x2',e.pageX)
			document.getElementById(newEl.id+'-line'+i).setAttribute('y2',e.pageY)
		};
		
		workspace.onmouseup = function() {
			workspace.onmousemove = null
			workspace.onmouseup = null
		}
		
		//}
		
		connector.ondragstart = function() {
			return false
		};
		
		//function getCoords(elem) {   // кроме IE8-
		//	var box = elem.getBoundingClientRect()
		//	return {
		//		top: box.top + pageYOffset,
		//		left: box.left + pageXOffset
		//};
	}
	newEl.appendChild(connector)
	
	var mover=document.createElement("div")
	mover.innerText="Move"
	mover.onmousedown = function(e) {
		var coords = getCoords(newEl)
		var shiftX = e.pageX - coords.left
		var shiftY = e.pageY - coords.top
	
		moveAt(e)
	
		mover.style.zIndex = 1000 // над другими элементами
	
		function moveAt(e) {
			newEl.style.left = e.pageX - shiftX + 'px'
			newEl.style.top = e.pageY - shiftY + 'px'
			
			for(i=0;i<0+linesCount;i++)
			{
				document.getElementById(newEl.id+'-line'+i).setAttribute('x1',newEl.style.left)
				document.getElementById(newEl.id+'-line'+i).setAttribute('y1',newEl.style.top)
			}
		}
		
		document.onmousemove = function(e) {
			moveAt(e)
		};
		
		mover.onmouseup = function() {
			document.onmousemove = null
			mover.onmouseup = null
		}
		
		}
		
		mover.ondragstart = function() {
			return false
		};
		
		function getCoords(elem) {   // кроме IE8-
			var box = elem.getBoundingClientRect()
			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
		};
	}
	newEl.appendChild(mover)
}


//for(i=0;i<10;i++)
//{
//	var tr=document.createElement("tr")
//	document.getElementById("tbl").appendChild(tr)
//	for(j=0;j<10;j++)
//	{
//		var td=document.createElement("td")
//		tr.appendChild(td)    
//		var inp=document.createElement("textarea")
//		inp.rows=1
//		td.appendChild(inp)
//		inp.id="inp"+i+"r"+j
//		let r=i,c=j
//		inp.oninput=function(e)
//		{
//			var v=document.getElementById("inp"+r+"r"+c).value.replace("\r\n","\n").replace("\r","\n")              
//			for(q=0;q<0+v.split("\n").length;q++)  
//				for(w=0;w<0+v.split("\n")[q].split("\t").length;w++)
//					document.getElementById("inp"+(r+q)+"r"+(c+w)).value=v.split("\n")[q].split("\t")[w]
//		}
//		
//	}
//}