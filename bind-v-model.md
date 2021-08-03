
# vue 自定义组件绑定 v-model
* custom-input
```
<template>
  <div>
    <input @input="val => $emit('input', val)" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
```

* custom-div
```
<template>
  <div @click="$emit('input', 123)">
    dianji
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>
```


* parent-component
```
<template>
  <div>
    <custom-input v-model="myValue1"></custom-input>
    <custom-div v-model="myValue2"></custom-div>
  </div>
</template>
```
