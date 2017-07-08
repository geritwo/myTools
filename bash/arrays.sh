#!/bin/bash

# Example: How to iterate through files in bash & user arrays.

files=(./*)
echo "Filelist read."

echo "Simple variable length:" ${#files[@]}

# Array length and iteration
echo "Array length:" ${#files[@]}

total=${#files[@]}
for (( i=0; i<=$(( $total -1 )); i++))
do
	if [ $i == 0 ]; then
		echo "The elements of the array are:"
	fi
	if [ $i == $(( $total-1 )) ]; then
		echo "and finally:"
	fi
	echo "Index: $i, Item: ${files[$i]}"
done
