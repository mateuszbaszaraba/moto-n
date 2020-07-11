<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to='/'><a class="navbar-brand">Moto-Shop</a></router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">

                <router-link to='/' tag="li" class="nav-item" activeClass="active" exact>
                    <a class="nav-link">Home</a>
                </router-link>

                <router-link to='/cars' tag="li" class="nav-item" activeClass="active">
                    <a class="nav-link">Cars</a>
                </router-link>

                <router-link to='/profile' tag="li" class="nav-item" activeClass="active">
                    <a class="nav-link">Profile</a>
                </router-link>

            </ul>
        </div>

        <div class="nav navbar-nav navbar-right">
            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
        </div>

    </nav>
</template>