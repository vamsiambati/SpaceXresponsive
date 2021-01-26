

    export class Core {
        core_serial: string;
        flight: number;
        block?: any;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        land_success?: any;
        landing_intent: boolean;
        landing_type?: any;
        landing_vehicle?: any;
    }

    export class FirstStage {
        cores: Core[];
    }

    export class OrbitParams {
        reference_system: string;
        regime: string;
        longitude?: any;
        semi_major_axis_km?: any;
        eccentricity?: any;
        periapsis_km: number;
        apoapsis_km: number;
        inclination_deg: number;
        period_min?: any;
        lifespan_years?: any;
        epoch?: any;
        mean_motion?: any;
        raan?: any;
        arg_of_pericenter?: any;
        mean_anomaly?: any;
    }

    export class Payload {
        payload_id: string;
        norad_id: any[];
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number;
        payload_mass_lbs: number;
        orbit: string;
        orbit_params: OrbitParams;
    }

    export class SecondStage {
        block: number;
        payloads: Payload[];
    }

    export class Fairings {
        reused: boolean;
        recovery_attempt: boolean;
        recovered: boolean;
        ship?: any;
    }

    export class Rocket {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: FirstStage;
        second_stage: SecondStage;
        fairings: Fairings;
    }

    export class Telemetry {
        flight_club?: any;
    }

    export class LaunchSite {
        site_id: string;
        site_name: string;
        site_name_long: string;
    }

    export class LaunchFailureDetails {
        time: number;
        altitude?: any;
        reason: string;
    }

    export class Links {
        mission_patch: string;
        mission_patch_small: string;
        reddit_campaign?: any;
        reddit_launch?: any;
        reddit_recovery?: any;
        reddit_media?: any;
        presskit?: any;
        article_link: string;
        wikipedia: string;
        video_link: string;
        youtube_id: string;
        flickr_images: any[];
    }

    export class Timeline {
        webcast_liftoff: number;
    }

    export class Flight {
        flight_number: number;
        mission_name: string;
        mission_id: any[];
        upcoming: boolean;
        launch_year: string;
        launch_date_unix: number;
        launch_date_utc: Date;
        launch_date_local: Date;
        is_tentative: boolean;
        tentative_max_precision: string;
        tbd: boolean;
        launch_window: number;
        rocket: Rocket;
        ships: any[];
        telemetry: Telemetry;
        launch_site: LaunchSite;
        launch_success: boolean;
        launch_failure_details: LaunchFailureDetails;
        links: Links;
        details: string;
        static_fire_date_utc: Date;
        static_fire_date_unix: number;
        timeline: Timeline;
        crew?: any;
    }


