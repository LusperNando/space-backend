import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = process.env.JWT_SECRET || configService.get<string>('JWT_SECRET');
        const expiresIn = configService.get<string>('JWT_EXPIRATION');
        console.log('JWT_SECRET:', secret); 
        console.log('JWT_EXPIRATION:', expiresIn); 
        return {
          secret: secret || 'abcde12354', 
          signOptions: {
            expiresIn: `${expiresIn || 3600}s`,
          },
        };
      },
    }),
    
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
  
})
export class AuthModule {}
