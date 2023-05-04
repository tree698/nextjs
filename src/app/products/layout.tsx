import styles from './layout.module.css';
import Link from 'next/link';
import { MetaData } from 'next';

export const metadata: MetaData = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인하세요',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/woman">여성 옷</Link>
        <Link href="/products/man">남성 옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
