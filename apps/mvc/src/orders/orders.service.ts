import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  private orders: { id: string; total: number }[] = [];

  create(CreateOrderDto: CreateOrderDto) {
    if (!CreateOrderDto.items.length) {
      throw new BadRequestException('Orders::Fail to add a new order.');
    }
    let total = 0;
    for (const it of CreateOrderDto.items) {
      total += it.price * it.quantity;
    }
    if (CreateOrderDto.hour >= 22) total = total * 0.9;
    if (total > 1_000_000) total = total * 0.95;

    const order = new Order(Date.now().toString(), total);
    this.orders.push(order);
    return order;
  }
}
