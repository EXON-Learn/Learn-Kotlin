# 배열
코틀린에서 배열은 Array 클래스로 표현합니다. <br>
```kotlin
var array: Array<String> = arrayOf("안녕", "안녕하세요")
println(array.get(0))
println(array[0])
println(array.size)
```
get 함수로 인덱스를 통해 값을 알아올 수 있고 <br>
[]로도 값을 알아올 수 있습니다. <br>