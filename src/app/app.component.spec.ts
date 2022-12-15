import { AppComponent } from './app.component';
import { render,screen } from "@testing-library/angular";


describe('AppComponent', () => {
  it('should render Welcome', async () => {
    await render(AppComponent);
    await screen.getByText('Welcome');
  });
});

