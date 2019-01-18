#!/bin/bash
path=$1
game=$2
sufix=$3


function Main(){
    echo $game
    Path
    Load
    Add
}

function Path(){
    if [ $path != "" ]; then
	    echo ""
	    for x in *$sufix; do
		y=${x%.*};
		echo import $y from \'$path$x\'\;
	    done
            echo ""
	else
	    echo ""
	    echo "Input error!"
	    Help
	    echo ""
	fi
}

function Add(){
    for x in *$sufix; do
	y=${x%.*};
	echo this$game.add.image\(center.width, center.height, \'$y\'\).setScale\(assetScale\)\;
    done
    echo ""
}

function Load(){
	echo ""
	for x in *$sufix; do
	    y=${x%.*};
	    echo this$game.load.image\(\'$y\',$y\)\;
	done
	echo ""
}

# function Help(){
#     echo "/path/to/insert_objects [command] [game (bool)] [sufix (optional)]  [path to import (necessary if command is import)]"
# 	echo "where"
# 	echo "command = load/import/add"
# 	echo "sufix is whatever sufix file you want to filter, e.g. svg, png, ogg etc"
# 	echo "game is a bool parameter to decide if its this.load/add.image(...) or  this.GAME.load/add.image(...)"
# 	echo "path is, e.g import file from /PATH/file.svg;"
# 	echo " 2018© - Created by Laura Viglioni"
# }

Main
