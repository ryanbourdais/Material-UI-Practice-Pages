import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import useStyles from './styles'

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <main className={classes.page}>
                <div className={classes.container}>
                    <section className={classes.section}>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                    <section className={classes.blue}>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                    <section className={classes.orange}>
                        <div className={classes.opacityWave}>
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                            </svg>
                        </div>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                    <section className={classes.dark}>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                    <section className={classes.red}>
                        <div className={classes.tilt}>
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                            </svg>
                        </div>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                    <section className={classes.pink}>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                    <div className={classes.spacer}>
                            <svg id="visual" viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1920" height="1080" fill="#156715"></rect><path d="M0 349L45.7 360.3C91.3 371.7 182.7 394.3 274.2 381.3C365.7 368.3 457.3 319.7 548.8 311.5C640.3 303.3 731.7 335.7 823 349C914.3 362.3 1005.7 356.7 1097 354.2C1188.3 351.7 1279.7 352.3 1371.2 341.3C1462.7 330.3 1554.3 307.7 1645.8 304C1737.3 300.3 1828.7 315.7 1874.3 323.3L1920 331L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#32cd32"></path><path d="M0 231L45.7 230C91.3 229 182.7 227 274.2 241.3C365.7 255.7 457.3 286.3 548.8 286.3C640.3 286.3 731.7 255.7 823 243.7C914.3 231.7 1005.7 238.3 1097 245.7C1188.3 253 1279.7 261 1371.2 256.8C1462.7 252.7 1554.3 236.3 1645.8 242.8C1737.3 249.3 1828.7 278.7 1874.3 293.3L1920 308L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#a6ae00"></path><path d="M0 220L45.7 220.7C91.3 221.3 182.7 222.7 274.2 222.7C365.7 222.7 457.3 221.3 548.8 230.2C640.3 239 731.7 258 823 254.3C914.3 250.7 1005.7 224.3 1097 207.5C1188.3 190.7 1279.7 183.3 1371.2 188.2C1462.7 193 1554.3 210 1645.8 212.3C1737.3 214.7 1828.7 202.3 1874.3 196.2L1920 190L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#d98800"></path><path d="M0 192L45.7 179C91.3 166 182.7 140 274.2 130.2C365.7 120.3 457.3 126.7 548.8 142.2C640.3 157.7 731.7 182.3 823 190.7C914.3 199 1005.7 191 1097 176C1188.3 161 1279.7 139 1371.2 127.8C1462.7 116.7 1554.3 116.3 1645.8 128.2C1737.3 140 1828.7 164 1874.3 176L1920 188L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#f65932"></path><path d="M0 106L45.7 107C91.3 108 182.7 110 274.2 108C365.7 106 457.3 100 548.8 93.2C640.3 86.3 731.7 78.7 823 79C914.3 79.3 1005.7 87.7 1097 96.8C1188.3 106 1279.7 116 1371.2 114.2C1462.7 112.3 1554.3 98.7 1645.8 85.3C1737.3 72 1828.7 59 1874.3 52.5L1920 46L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#ff0066"></path></svg>
                        </div>
                    <section className={classes.green}>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                    <section className={classes.purple}>
                        <Typography variant='h1'>Nice Curves</Typography>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique a, ullam nobis adipisci sunt, reprehenderit rem aperiam provident illum molestias ad quos tempora blanditiis commodi laborum sed quae fuga!</Typography>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home