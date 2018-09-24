function selectionsort(arr)
{

  var len=arr.length;//calculating arrary length

for(var i=0;i<len;i++)//number of pass
{
  var min=i;//copying elements of i
  for(var j=i+1;j<len;j++)//comparing the array for min
  {
if(arr[j]<arr[min])//
{
min=j;//
}
  }
  var temp=arr[i];//Swaping
  arr[i]=arr[min];
  arr[min]=temp;

}
return arr;
console.log(arr);
}
