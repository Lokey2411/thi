import './index.css'

const Contact = () => {
    

    var click =function(){
        String.prototype.isNumber = function(){
            return Number(this) == this;
        }
    
        String.prototype.isAlphaChar = function(){
            return (this<='Z'&&this>='A')||(this<='z'&&this>='a')||this==' ';
        }
    
        String.prototype.isAlpha = function(){
            let n = this.length;
    
            for(let i=0;i<n;++i){
                if(!(this.charAt(i).isAlphaChar()))return false;
            }
            return true;
        }
        function removeVietnameseTones(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
            str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
            str = str.replace(/đ/g,"d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            // Some system encode vietnamese combining accent as individual utf-8 characters
            // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
            str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
            str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
            // Remove extra spaces
            // Bỏ các khoảng trắng liền nhau
            // str = str.replace(/ + /g," ");
            // str = str.trim();
            // Remove punctuations
            // Bỏ dấu câu, kí tự đặc biệt
            // str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
            return str;
        }
        var input = document.querySelectorAll('.modal input');
    
        var n = input.length;
        function phoneValidate(elem){
            return elem.startsWith('0')
            && elem.length == 10
            && elem.isNumber()
            ;
        }
    
        function nameValidate(str){
            str = removeVietnameseTones(str);
            return str.isAlpha();
        }
    
        function emailValidate(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        if(!input[1].value||!input[2].value||!input[4].value){
            alert('Nhập thiếu rồi cha');
            return;            
        }
        if(!input[5].checked){
            alert('Yêu cầu bạn đồng ý với điều khoản của chúng tôi');
            return;
        }
        if(!nameValidate(input[0].value)){
            alert('Nhập sai rồi cha')
            return;            
        }
        if(!emailValidate(input[1].value)){
            alert('Nhập sai rồi cha')
            return;
        }
        if(!phoneValidate(input[2].value)){
            alert('Nhập sai rồi cha')
            return;
        }
        alert("Cảm ơn bạn đã phản hồi");
        window.location = './'
    }
    return <div>
        <div className="modal" id = "modal">
            <div className="container">
                <div className="header">Contact us</div>
                <div className="box">
                    <ul className="content">
                        <li className="line row-2"><input type="text" placeholder = "Họ tên" id = "name"/><input type="text" placeholder = "E-mail *"/></li>
                        <li className="line row-2"><input type="text" placeholder = "Điện thoại *" id = "phone-number"/><input type="text" placeholder = "Địa chỉ"/></li>
                        <li className="line">
                            <select name="service" id="service">
                                <option value="default">Chọn một dịch vụ *</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>    
                            </select>    
                        </li>
                        <li className="line">
                            <input type="text" placeholder = "Nội dung *" id = "content"/>    
                        </li>
                        <li className="line check-box"><input type="checkbox" name="" id=""/>Tôi đã đọc và đồng ý với <a href="">điều khoản</a></li>
                        <li className="line" onClick={click}><button id = "button">Gửi</button></li>   
                        
                    </ul>
                    <div className="force">(*) Thông tin bắt buộc phải nhập</div>
                </div>
                
            </div>
        </div>
    </div>;
 };
 
 export default Contact;