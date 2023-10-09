const actionsConfig = {
    add: function() {
        console.log('Add to cart');
    },
    remove: function() {
        console.log('Remove from cart');
    },
    clear: function() {
        console.log('Clear cart');
    },
    edit: function() {
        console.log('Edit cart');
    }
}

function buttonAction(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    const functionKey = event.target.dataset.action;
    if (functionKey) {
        actionsConfig[functionKey]();
    }
}
document.getElementById('card').addEventListener('click', buttonAction);
// document.getElementById('add').addEventListener('click', buttonAction);
// document.getElementById('remove').addEventListener('click', buttonAction);
// document.getElementById('clear').addEventListener('click', buttonAction);
// document.getElementById('edit').addEventListener('click', buttonAction);

document.addEventListener('keydown', function(event) {
    if(event.key === 's') {
        event.preventDefault();
        console.log(event);
        if(event.ctrlKey) {
            console.log('we can not to save');
        }
    }
});