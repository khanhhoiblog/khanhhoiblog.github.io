var _id_view = '';
var _a_list = document.getElementsByTagName('a');
for (var _i = 0 ; _i < _a_list.length; _i++) {
    if (_a_list[_i].getAttribute('href')) {
        if (_a_list[_i].getAttribute('data-hovercard')) {
            var _hvc = _a_list[_i].getAttribute('data-hovercard');
            var _id = _hvc.substring(_hvc.lastIndexOf('=') + 1);
            _id_view += ';'+_id;
        }
    }
}
console.log('KẾT QUẢ: ' + _id_view);