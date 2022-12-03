import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MaterialLink from '@mui/material/Link';
import { useRouter } from 'next/router';
import Link from 'next/link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs() {
    const router = useRouter();

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" sx={{marginBottom: '10px'}}>
                {router.domainLocales?.map((value) => (
                    <Link href="/">
                        <MaterialLink underline="hover" color="inherit" >
                            MUI
                        </MaterialLink>
                    </Link>

                ))}
                <Link href="/">
                    <MaterialLink underline="hover" color="inherit" >
                        Главная
                    </MaterialLink>
                </Link>
                <Link href="/popular">
                    <MaterialLink underline="hover" color="inherit">
                        Популярные
                    </MaterialLink>
                </Link>
            </Breadcrumbs>
        </div>
    );
}