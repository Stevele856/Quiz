`State` là gì?

- State là thứ giúp chúng ta lưu và thay đổi dữ liệu bên trong  component, từ đó làm cho UI tự đọng cập nhật mỗi khi dữ liệu thay đổi.  

- React không tự cập nhật DOM khi thay đổi giá trị của biến thường, nó chỉ cập nhật khi bạn cho biết có trạng thái đã thay đổi

`const [optionSelected, setOptionSelected] = useState()`

Giải thích: useState trả về 1 mảng có 2 phần tử `optionSelected` và `setOptionSelected`

+ `optionSelected` là giá trị hiện tại của `state`
+ `setOptionSelected` là hàm callback để đổi giá trị `state`

=> Array destructuring

=> React không cho phép bạn đổi giá trị của `optionSelected` bằng cách gán giá trị trực tiếp mà phải thông qua hàm `setOptionSelected`

- Phương thức `Array.from`

-  Phương thức `Number()`: convert various data types into a numeric representation.

- !optionSelected: đảo ngược giá trị (true thành false và ngược lại)

- Prop: truyền dữ liệu từ component Quiz(Component cha) sang component con

- Để theo dõi 1 dữ liệu và thực hiện hành động hay logic khi dữ liệu đó thay đổi => useEffect

- Vấn đề với sử dụng useEffect để chấm điểm??? => ChatGPT

- props thường được phân rã trực tiếp trong tham số của hàm

- Vấn đề với việc cộng điểm, đã đặt logic setScore trong hàm handleSelectedOption  nhưng vì mình đã áp logic chỉ được chọn đáp án 1 lần (nên dùng cách này được). Nếu trong trường hợp Nếu user đổi đáp án trong cùng một câu hỏi (khi logic có thể thay đổi đáp án) thì:

1. Chọn đáp án sai (không tăng điểm).
2. Đổi sang đáp án đúng (score tăng thêm 1).
3. Đổi lại đáp án sai → score không giảm → kết quả sai lệch.

=> Nên cũng xem lại trường hợp này
