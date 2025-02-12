import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from '../auth/auth.service';  
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService ,
    private readonly authService: AuthService,  
  ) {}

  
  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.registerUser(createUserDto);
    return { message: 'User registered successfully', user: newUser };
  }

  
  @Post('/login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;

    
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    
    return await this.authService.login(user);
  }
}
