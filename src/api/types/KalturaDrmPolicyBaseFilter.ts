
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDrmPolicyBaseFilterArgs  extends KalturaFilterArgs {
    partnerIdEqual? : number;
	partnerIdIn? : string;
	nameLike? : string;
	systemNameLike? : string;
	providerEqual? : KalturaDrmProviderType;
	providerIn? : string;
	statusEqual? : KalturaDrmPolicyStatus;
	statusIn? : string;
	scenarioEqual? : KalturaDrmLicenseScenario;
	scenarioIn? : string;
}


export class KalturaDrmPolicyBaseFilter extends KalturaFilter {

    partnerIdEqual : number;
	partnerIdIn : string;
	nameLike : string;
	systemNameLike : string;
	providerEqual : KalturaDrmProviderType;
	providerIn : string;
	statusEqual : KalturaDrmPolicyStatus;
	statusIn : string;
	scenarioEqual : KalturaDrmLicenseScenario;
	scenarioIn : string;

    constructor(data? : KalturaDrmPolicyBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmPolicyBaseFilter' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				nameLike : { type : 's' },
				systemNameLike : { type : 's' },
				providerEqual : { type : 'es', subTypeConstructor : KalturaDrmProviderType, subType : 'KalturaDrmProviderType' },
				providerIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaDrmPolicyStatus, subType : 'KalturaDrmPolicyStatus' },
				statusIn : { type : 's' },
				scenarioEqual : { type : 'es', subTypeConstructor : KalturaDrmLicenseScenario, subType : 'KalturaDrmLicenseScenario' },
				scenarioIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmPolicyBaseFilter',KalturaDrmPolicyBaseFilter);
