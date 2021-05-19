let count = 0
for( let o in objects){
	if( objects[o].x == objects[o].y){
		count++	
	}
}
return count