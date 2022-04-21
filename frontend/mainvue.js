
const editDiv= 
`<b>Editing task {{ editToDoName }}</b></br></br>
<input type="text" name="editTxtBx" value="New Name">
<input type="button" name="EditBtn" value="Edit">
`

var myitems = [
{name: "ItemA", done: 1},
{name: "ItemB", done: 1},
{name: "itemC", done: 0}, 
{name: "itemD", done: 0}
]

var thisitem = "algo";
var editToDoName = "ItemItem";

var mainDiv = new Vue({
el: '#maindiv',
data: { items: myitems},
methods: {
    editItem(item){
        myitems = myitems.filter((obj)=> {
            thisitem = item;
            })
        }  
   
    }
    

})



        
      