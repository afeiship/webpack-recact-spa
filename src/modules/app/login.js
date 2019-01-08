import { $api, $form, $route, TestComp } from '#';
import ReactFullImage from 'react-full-image';
import bgImg from '@/assets/images/bg.jpg';

@mixin(['on-change'])
export default class extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      formData: {
        username: '',
        password: ''
      }
    };
  }

  _onSubmit = (e) => {
    e.preventDefault();
    console.info('to users index.', this.state.formData);
    nx.$app.emit('app:login', { auth: true });
    $route.push('/admin/orders/index');
  };

  _onClick1 = () => {
    nx.$memory = {
      'users.test1.test.item1': Math.random()
    };
    const { users } = nx.$memory;
    console.log(
      'paths: users.test1.test.item1, value is:',
      users.test1.test.item1
    );
  };

  _onClick2 = () => {
    nx.$local = {
      'users.test2': Math.random()
    };
  };

  componentDidMount() {
    const { loading } = nx.$session;
    console.log(loading);
    nx.$app.on('test-comp:test', (inData) => {
      console.log('show 1 me you data:', inData);
    });
  }

  render() {
    const { formData } = this.state;
    return (
      <div className="login-wrapper">
        <TestComp />
        <ReactFullImage src={bgImg} />
        <TestComp />
        <button onClick={this._onClick1}>Set by path(Memory)</button>
        <button onClick={this._onClick2}>Set by path(Local)</button>
        <div className="p20 bg-f shadow-5 login-view">
          <form onSubmit={this._onSubmit}>
            <label className="db p10">
              <strong>用户名</strong>
              <input
                type="text"
                value={formData.username}
                onChange={this.onChangeToState.bind(this, 'formData.username')}
              />
            </label>
            <label className="db p10">
              <strong>密码</strong>
              <input
                type="text"
                value={formData.password}
                onChange={this.onChangeToState.bind(this, 'formData.password')}
              />
            </label>
            <button className="wp-10" type="submit">
              登录
            </button>
          </form>
        </div>
      </div>
    );
  }
}
