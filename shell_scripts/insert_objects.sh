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

function Help(){
    echo ./insert_objects [path] [word. (optional)] [sufix (optional)]
    echo [path] is the relative path from the file.js to the assets folder you are executing this script
    echo [word. ] is a optional word to use in load and add funcions, e.g. instead of \'this.load.image\(...\' the script will return \'this.word.load.image\(...\'
    echo [sufix] instead of run the script for all files in this folder, use it only to files ending with the sufix chosen
	echo " 2018© - Created by Laura Viglioni"
}

Main
