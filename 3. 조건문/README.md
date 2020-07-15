# 조건문
## if
```kotlin
  fun maxOf(a: Int, b: Int): Int {
  	if (a > b) {
  		return a
  	} else {
  		return b
  	}
  }
```
- 일반적인 조건문

## when
- 일반 언어에서 사용되던 switch 와 매우 비슷합니다.
```kotlin
when (x) {
	1 -> print("x is 1")
	2 -> print("x is 2")
	3 -> print("x is 3")
	else -> {
		print("x")
	}
}
```
- when 은 다른 언어의 switch 와는 조금 다릅니다. 
- switch의 default 는 필수로 들어가지 않아도 되지만 when 의 else 는 필수로 들어가야합니다.
```kotlin
when (x) {
	1,2,3 -> print("x is 1~3")
	else -> {
		print("x")
	}
}
```
- 많은 경우가 동일한 방식으로 처리되야 할때는 , 으로 조건을 추가할 수 있습니다.
