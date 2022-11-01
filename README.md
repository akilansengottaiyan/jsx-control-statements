# JSX Control Statements with macros

This repository is the extension of [jsx-control-statements](https://github.com/AlexGilleran/jsx-control-statements) with [macros](https://github.com/kentcdodds/babel-plugin-macros) support.

It also supports the non macro version of the library
### Installation : 

`  npm i -D babel-plugin-macros`

`  npm i -D babel-plugin-jsx-control-statements-macros`

### Usage : 
```
import { If, For, With, Choose, When, Otherwise } from 'babel-plugin-jsx-control-statements-macros/macro'

const ExampleJsxControlStatements = () => (
  <If condition={true}>
      Rendered
  </If>
  <If condition={false}>
      Not Rendered
  </If>

  <For each="item" of={[1,2,3,4,5]}>
      <span key={item}>{item}</span>
  </For>
  
  <With foo={47} bar={'test'}>
      <span>{foo}</span>
      <span>{bar}</span>
  </With>

  <Choose>
      <When condition={false}>
          <span>IfBlock not rendered</span>
      </When>
      <When condition={true}>
          <span>ElseIfBlock rendered</span>
      </When>
      <Otherwise>
          <span>ElseBlock not rendered</span>
      </Otherwise>
  </Choose>
)
