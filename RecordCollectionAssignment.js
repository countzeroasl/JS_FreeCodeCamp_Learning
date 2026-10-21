var collection = {
    "2548": 
    {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : 
        [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468" :
    {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : 
        [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245" :
    {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439" :
    {
        "album" : "ABBA Gold"
    },
};

//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords (id, prop, value)
{
    if (value === "")
    {
        delete collection[id][prop];
    }
    else if (prop === "tracks")
    {
        collection[id][prop] = collection[id][prop] || [];  //If the property exists, use as is.  If not, create it with an empty array.
        collection[id][prop].push(value);    //Since we know that the property exists now, we can push the value to the end of the array.
    }
    else
    {
        collection[id][prop] = value;   //Otherwise, set the value of the desired property to the value of the variable 'value'.
    }

    return collection;
}

updateRecords(2468, "tracks", "Lady Cab Driver");
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(collectionCopy);