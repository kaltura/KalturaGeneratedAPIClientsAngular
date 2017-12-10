
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaMsnDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    username? : string;
	password? : string;
	domain? : string;
	csId? : string;
	source? : string;
	sourceFriendlyName? : string;
	pageGroup? : string;
	sourceFlavorParamsId? : number;
	wmvFlavorParamsId? : number;
	flvFlavorParamsId? : number;
	slFlavorParamsId? : number;
	slHdFlavorParamsId? : number;
	msnvideoCat? : string;
	msnvideoTop? : string;
	msnvideoTopCat? : string;
}


export class KalturaMsnDistributionProfile extends KalturaConfigurableDistributionProfile {

    username : string;
	password : string;
	domain : string;
	csId : string;
	source : string;
	sourceFriendlyName : string;
	pageGroup : string;
	sourceFlavorParamsId : number;
	wmvFlavorParamsId : number;
	flvFlavorParamsId : number;
	slFlavorParamsId : number;
	slHdFlavorParamsId : number;
	msnvideoCat : string;
	msnvideoTop : string;
	msnvideoTopCat : string;

    constructor(data? : KalturaMsnDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMsnDistributionProfile' },
				username : { type : 's' },
				password : { type : 's' },
				domain : { type : 's' },
				csId : { type : 's' },
				source : { type : 's' },
				sourceFriendlyName : { type : 's' },
				pageGroup : { type : 's' },
				sourceFlavorParamsId : { type : 'n' },
				wmvFlavorParamsId : { type : 'n' },
				flvFlavorParamsId : { type : 'n' },
				slFlavorParamsId : { type : 'n' },
				slHdFlavorParamsId : { type : 'n' },
				msnvideoCat : { type : 's' },
				msnvideoTop : { type : 's' },
				msnvideoTopCat : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMsnDistributionProfile',KalturaMsnDistributionProfile);
