export class Copy {
  constructor(
    public id: number,
    public inventoryCode: string,
    public status: 'available' | 'borrowed' | 'damaged',
    public acquisitionDate: Date,
    public location: string
  ) {}

  isAvailable(): boolean {
    return this.status === 'available';
  }

  borrow() {
    if (!this.isAvailable()) {
      throw new Error('Copia no disponible');
    }
    this.status = 'borrowed';
  }
}
