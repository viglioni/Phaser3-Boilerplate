#!/bin/bash

>index.js

if [ $# -gt 0 ]
then
    for suffix in $@
    do
	for asset in *.$suffix
	do
	    name=${asset/.*/}
	    echo export \{default as $name\} from \'./$asset\'\; >> index.js
	done
    done
else
    for asset in *
	do
	    name=${asset/.*/}
	    echo export \{default as $name\} from \'./$asset\'\; >> index.js
	done
fi

