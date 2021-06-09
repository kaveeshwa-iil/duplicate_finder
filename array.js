var array = [1,2,4,3,4,3,5,5,7,6];

function removeDupliItems(ardata) {

    return ardata.filter((item, index) => ardata.indexOf(item)===index);

}

function getDupliValues(dudata) {
    return dudata.filter((item, index) => dudata.indexOf(item) !==index)
}

    var duplicatecounts = {};
    array.forEach(function(i) { duplicatecounts[i] = (duplicatecounts[i] || 0)+1; });



    console.log("Sorted Array : "+array.sort());
    console.log("Duplicates Removed : "+removeDupliItems(array));
    console.log("Duplicated Values : "+getDupliValues(array));
    console.log(duplicatecounts);



