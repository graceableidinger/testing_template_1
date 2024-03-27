import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
//test
dotenv.config();

test('test', async ({ page }) => {
  await page.goto('https://watchplaylearn.sesame.org/');
  await page.goto('https://watchplaylearn.sesame.org/login');
  await page.locator('#login-email').click();
  await page.locator('#login-email').fill(process.env.USER_NAME as string);
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill(process.env.PASSWORD as string);
  await page.getByRole('button', { name: 'login Login' }).first().click();
  await page.getByText('Elmo and Zoe are playing “Mango Basket”, where they toss bottlecaps into a').click();
  await page.getByText('play_circle').click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.locator('li').filter({ hasText: 'MATH English It\'s Hip to be' }).getByRole('button').click();
  await page.getByRole('button', { name: 'health_and_safety Health &' }).click();
  await page.locator('li').filter({ hasText: 'H&S English Appreciating Body' }).getByRole('button').click();
  await page.getByRole('button', { name: 'calculate Math' }).click();
  await page.locator('li').filter({ hasText: 'MATH English Between Two' }).getByRole('button').click();
  await page.getByRole('button', { name: 'science Science' }).click();
  await page.locator('li').filter({ hasText: 'SCI English Bridge of Sticks' }).getByRole('button').click();
  await page.getByRole('button', { name: 'psychology SEL' }).click();
  await page.locator('li').filter({ hasText: 'SEL English Ameera is Frustrated! Basma and Jad are playing art class, but' }).getByRole('button').click();
  await page.getByRole('button', { name: 'add_shopping_cart ADD ALL' }).nth(3).click();
  await page.getByRole('button', { name: 'remove_shopping_cart REMOVE ALL' }).nth(3).click();
  await page.getByRole('button', { name: 'shopping_cart_checkout' }).click();
  await page.getByRole('button', { name: 'logout Logout' }).click();
});