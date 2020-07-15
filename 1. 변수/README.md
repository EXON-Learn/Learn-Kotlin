# 변수
## val
<b>변하지 않음 (const)</b> <br>
초기화 필요<br>
: 뒤에 타입을 쓰기 (안써도 타입을 추론해줌) <br>
``` kotlin
val a: Int = 1
val b = 2 // int 타입 추론
val c: Int // 오류, 초기화 필요
a = 2 // 오류, val 은 변하지 않음
```

## var
<b>변할 수 있음<b> <br>
초기화 필요<br>
: 뒤에 타입을 쓰기<br>
``` kotlin
var a: Int = 1
var b = 2 // int 타입 추론
var c: Int // 오류, 초기화 필요
a = 2
var a: Int = 2 // 하지만 재선언을 통해 값을 바꾸는 효과와 비슷한 효과를 낼 수 있음
```