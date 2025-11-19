export enum PlanGoal {
  FAMILY = 'FAMILY',
  PROFIT = 'PROFIT'
}

export enum BudgetLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export interface MenuPlan {
  title: string;
  starters: string[];
  mainCourse: string;
  sides: string[];
  dessert: string;
  estimatedCost: number;
  estimatedSalePrice: number; // 0 if not for profit
  profitTip: string;
  shoppingList: string[];
}
