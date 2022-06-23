// assets imports
import { Button, Grid } from '@mui/material';
import 'fontsource-raleway';
import logoImage from '../../assets/images/logo.svg';
import bgImage from '../../assets/images/bg.svg';
import 'react-phone-input-2/lib/style.css';
import { useTitle } from '@bridgeup/common/hooks';
export function Terms(props: any) {
  useTitle('Welcome to BridgeUp - BridgeUp');

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      style={{ backgroundColor: '#030914' }}
      className="login-holder"
    >
      <Grid
        item
        xs={12}
        style={{
          maxWidth: '1360px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <div className="container">
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="verify-account terms-acc">
            <h5 className="c2 mb20">
              TERMS AND CONDITIONS FOR USE OF AND ACCESS TO THE BRIDGEUP
              PLATFORM
            </h5>
            <p className="c3">
              <span className="c6 c1">
                THIS DOCUMENT IS AN ELECTRONIC RECORD GENERATED BY A COMPUTER
                SYSTEM AND DOES NOT REQUIRE ANY PHYSICAL OR DIGITAL SIGNATURES.
                THIS IS A LEGAL AGREEMENT BETWEEN YOU AND BRIDGEUP TECH PRIVATE
                LIMITED AND IT GOVERNS YOUR ACCESS TO AND USE OF BRIDGEUP TECH
                PRIVATE LIMITED&rsquo;S PLATFORM.
              </span>
            </p>
            <p className="c3">
              <span className="c1">These terms and conditions (</span>
              <span className="c8 c1">Terms</span>
              <span className="c1">
                ) govern your access to and use of the website (
              </span>
              <span className="c1 c17">
                <a className="c9" href="https://bridgeup.com" target="blank">
                  https://bridgeup.com
                </a>
              </span>
              <span className="c1">
                ), mobile website, and any other online platform (collectively,
                the{' '}
              </span>
              <span className="c8 c1">Platform</span>
              <span className="c1">
                ) offered by BridgeUp Tech Private Limited (
              </span>
              <span className="c1 c8">BridgeUp</span>
              <span className="c1">
                ) to provide you with BridgeUp&rsquo;s services. These Terms are
                to be read in conjunction with BridgeUp&rsquo;s privacy policy
                accessible at (
              </span>
              <span className="c1 c13">
                <a
                  className="c9"
                  target="blank"
                  href="https://bridgeup.com/privacy-policy/"
                >
                  https://bridgeup.com/privacy-policy/
                </a>
              </span>
              <span className="c1">) (</span>
              <span className="c8 c1">Privacy Policy</span>
              <span className="c6 c1">
                ). It is clarified that these Terms govern your access to the
                Platform, and are to be read in conjunction with, and not in
                derogation of any other agreements that you may have executed
                with BridgeUp, and any other terms and policies as may apply to
                you and be periodically published on the Platform and, or,
                communicated to you by BridgeUp via e-mail, SMS, dashboard,
                courier, or by any other lawful method. For the purpose of these
                Terms, &lsquo;access&rsquo; will mean and include your directly
                or indirectly availing services from BridgeUp and, or, your
                using the BridgeUp Platform.
              </span>
            </p>
            <p className="c3">
              <span className="c11 c8 c1">Scope and Intent </span>
            </p>
            <ol className="c4 lst-kix_list_1-0 start">
              <li className="c3 c5 li-bullet-0">
                <span className="c1">
                  These Terms apply to anyone accessing the Platform, regardless
                  of the device or internet enabled resource used by you to
                  access the Platform (each a{' '}
                </span>
                <span className="c8 c1">Device</span>
                <span className="c6 c1">
                  ). By accessing the Platform, you indicate to have read,
                  understood, and agree to be bound by these Terms, the Privacy
                  Policy, other service specific policies of BridgeUp as
                  communicated from time to time, and all other applicable laws
                  and regulations without any limitation or qualification.
                  &nbsp;
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c1">
                  You will be required to execute other agreements with BridgeUp
                  in order to gain access to the Platform (each an{' '}
                </span>
                <span className="c8 c1">Agreement</span>
                <span className="c6 c1">
                  ). Such Agreements may be executed by you through the Platform
                  itself or offline. It is clarified that in the event of any
                  contradiction between these Terms and any Agreements governing
                  your access to BridgeUp&rsquo;s services, the terms of such
                  Agreement(s) will supersede these Terms.
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  BridgeUp reserves all rights in relation to the Platform that
                  are not expressly enumerated in these Terms.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c8 c1">Your Account on the Platform </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You may only access the services offered through the Platform
                  as per these Terms including the Privacy Policy, and the terms
                  and conditions mentioned in the Agreement(s).
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c1">
                  You will be required to register yourself with the Platform by
                  creating an account to access the services offered by BridgeUp
                  and to transact on the Platform (
                </span>
                <span className="c8 c1">Your Account</span>
                <span className="c6 c1">). </span>
              </li>
              <li className="c3 c5 li-bullet-0" id="h.30j0zll">
                <span className="c6 c1">
                  Should Your Account represent that you are a company and not
                  an individual, the details of the authorised personnel must be
                  provided as the nodal person through whose registration the
                  company would access the Platform. The username and password
                  created by such nodal person will belong to the company.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c1">
                  You may create Your Account on the Platform by filling in
                  necessary details on the Sign Up page of the Platform and
                  submitting it for BridgeUp&rsquo;s review. You hereby allow
                  BridgeUp to integrate your personal information and other
                  information from third-party service providers, subject to the
                  terms of BridgeUp&rsquo;s Privacy Policy and the privacy
                  policies of the relevant third-parties. &nbsp; &nbsp;
                </span>
                <span className="c8 c1">&nbsp;</span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You are required to submit accurate and complete information
                  to access the Platform. You understand and agree that BridgeUp
                  will assume the veracity of the information submitted by you
                  and has not independently verified the information submitted
                  by you. BridgeUp does not assume any responsibility and
                  disclaims all liability for assuring the accuracy and
                  completeness of your data as integrated from third-parties. At
                  all times, you will remain responsible for your passwords and
                  for any access to the Platform from Your Account maintained on
                  the Platform. Your Account details and password(s) on the
                  Platform are for your use only, and subject to these Terms,
                  you are responsible for maintaining the confidentiality of
                  Your Account details and passwords and for restricting access
                  to your Devices. You hereby accept responsibility for all
                  activities that occur under and through Your Account on the
                  Platform.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  In the event that you are a nodal person for a company as
                  detailed in Paragraph 6 hereinabove, you agree that your
                  username, password and other such details will be provided to
                  the company by BridgeUp upon the receipt of a verified request
                  from the company.
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  After you submit all necessary information for the creation of
                  Your Account, BridgeUp will review the details submitted by
                  You. Should BridgeUp be satisfied with the information
                  submitted by you, you will be required to execute additional
                  Agreement(s) which will govern your access to the Platform.
                  &nbsp;
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  Once Your Account has been created and you have executed the
                  Agreement(s), you may access the Platform in terms of the
                  Agreement(s) which you have executed.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">Your Access to the Platform</span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You understand that all services, as offered by BridgeUp, are
                  available only in India and based on your geographic location,
                  you may not be eligible for accessing services offered by
                  BridgeUp.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  If you provide any information on the Platform or under an
                  Agreement which is inaccurate, or incomplete or where BridgeUp
                  suspects that such information is untrue, inaccurate, or
                  incomplete, BridgeUp reserves the right to suspend or
                  terminate Your Account and your access to the Platform
                  forthwith. Your responsibility to maintain the accuracy and
                  completeness of the information in Your Account is not only
                  towards BridgeUp but extends to all third-parties that Your
                  Account information is integrated with.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You are not authorised to commercially exploit the Platform
                  for any reason whatsoever, save and except to the limited
                  extent expressly set out in Agreements executed between you
                  and BridgeUp.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You are not authorised to reproduce, duplicate, copy, reverse
                  engineer, sell, resell, or exploit any portion of the Platform
                  and allow any unauthorised access to the Platform and, or,
                  facilitate unauthorised access to the Platform.
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You agree not to circumvent, remove, degrade, or deactivate
                  any of the contents of the Platform and, or, use any robot,
                  spider, scraper, or other means to access the Platform for any
                  purpose. You further agree not to decompile, reverse engineer,
                  and disassemble any software or other products or processes
                  accessible through the Platform and to not insert any code or
                  product or manipulate the content of the Platform in any way,
                  or use any data mining, data gathering or extraction method on
                  the Platform.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You agree not to use any product which modifies, changes, adds
                  to, or subtracts from the source code, graphical user
                  interface, structure, integration, look and feel or features
                  of the Platform.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You agree not to upload, post, e-mail or otherwise send or
                  transmit any material designed to interrupt, destroy, or limit
                  the functionality of the Platform, or do any act which may
                  adversely affect any third-party&rsquo;s access of, and
                  experience on the Platform or make any access to the Platform
                  which is illegal as per the applicable laws.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You will notify BridgeUp upon discovery of any unauthorised
                  use or disclosure or any illegal access to the Platform,
                  whether intentional or unintentional, and with promptitude
                  will cooperate with BridgeUp in every reasonable way to help
                  regain possession of the Platform and to prevent its further
                  unauthorised access.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You agree and understand that BridgeUp reserves the right to
                  suspend, refuse, or restrict your access to Your Account, the
                  Platform, and the services therein in the event that you are
                  found to be in violation of the Agreement(s) and, or these
                  Terms.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">Intellectual Property </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0" id="h.1fob9te">
                <span className="c1">
                  You agree and understand that nothing in these Terms shall be
                  deemed to be construed as an assignment, transfer, or novation
                  of any intellectual property right belonging to and owned by
                  BridgeUp including,{' '}
                </span>
                <span className="c1 c18">inter alia</span>
                <span className="c6 c1">
                  &nbsp;all content, trademarks, trade names, copyrights,
                  designs, software, patents, process-flows and know-how as
                  published on the Platform, set out in any Agreement or as
                  otherwise communicated to you by BridgeUp during the course of
                  your access to the Platform. BridgeUp holds and will continue
                  to hold all right, title and interest in all intellectual
                  property in the Platform itself and any derivative works
                  thereof. It is clarified that all third-party trademarks,
                  brands, links, and content on the Platform are the property of
                  their respective owners.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  Without derogating from the rigour of Paragraph 21, BridgeUp
                  hereby grants you a limited, non-exclusive, non-transferable,
                  non-assignable, and non-sublicensable license to access the
                  Platform and the intellectual property contained in the
                  Platform, for the limited purpose as set out in the
                  Agreement(s) and subject to these Terms. You will only access
                  the Platform in accordance with this limited license granted
                  to you by BridgeUp.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You agree not to reproduce, distribute, sell, modify, display,
                  perform, archive, publish, license, create derivative works
                  from, offer for sale or use (except as expressly authorised
                  under these Terms), or in any way exploit any part of any
                  intellectual property or other information, content,
                  materials, and services available on or through the Platform.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">
                Use of your Information by BridgeUp{' '}
              </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c1 c6">
                  BridgeUp only uses your information as set forth in the
                  Agreements and the Privacy Policy.{' '}
                </span>
              </li>
            </ol>
            <p className="c3 c10">
              <span className="c6 c1"></span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You hereby grant your consent to receive periodic
                  communication and non-transactional messages from BridgeUp
                  through text messages and e-mails in relation to
                  BridgeUp&rsquo;s service offerings. You can unsubscribe or
                  opt-out from receiving e-mail communications and newsletters
                  from BridgeUp at any time by clicking the
                  &lsquo;Unsubscribe&rsquo; option available at the bottom of
                  each such e-mail communication. Your acceptance of these Terms
                  will have an overriding effect on any registration of your
                  mobile number with the National Do Not Call Registry of the
                  Telecom Regulatory Authority of India and any other Do Not
                  Call Registry operated by any service provider.
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  Any feedback you provide to BridgeUp in relation to
                  BridgeUp&rsquo;s services and, or, the Platform will not be
                  considered confidential information and BridgeUp may use such
                  information on an unrestricted basis. You represent and
                  warrant that your feedback does not contain any confidential
                  or proprietary information and you are not entitled to any
                  compensation or reimbursement of any kind from BridgeUp for
                  use of the information contained in the feedback under any
                  circumstances.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">Age of Consent </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  In order to access BridgeUp&rsquo;s services on the Platform
                  and to create and maintain Your Account on the Platform you
                  must be at least 18 years of age. For users below the age of
                  18, consent to access the Platform shall be provided by the
                  legal guardian of the child.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c8 c1 c11">
                Termination of License and your access to the Platform{' '}
              </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  If you violate your obligations under the Agreement(s), these
                  Terms, the Privacy Policy or any other policies of the
                  Platform, your permission to access the Platform and any
                  licence granted over the Platform ends and ceases immediately.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  Your Account on and access to the Platform may be terminated
                  further to any requests by authorised law enforcement and / or
                  other government and regulatory agencies and authorities.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">Warranties and Limitations </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  Your access to the Platform is at your own risk and
                  discretion. You agree to have read, understood, and be bound
                  by these Terms and the Privacy Policy. BridgeUp and our
                  subsidiaries, affiliates, officers, employees, and licensors
                  make no warranty that the Platform will meet your requirements
                  and, or, that the service will be uninterrupted, timely or
                  error-free.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c1">
                  You agree and acknowledge that BridgeUp only provides the
                  services as detailed in the Agreements and acts and will
                  always act only as an intermediary to facilitate the
                  transactions through the Platform. BridgeUp is not and it
                  shall not be characterized{' '}
                </span>
                <span className="c1 c18">inter</span>
                <span className="c1">&nbsp;</span>
                <span className="c1 c18">alia</span>
                <span className="c6 c1">
                  &nbsp;as: (i) a payment system provider as defined under the
                  Payment and Settlement Systems Act, 2007, (ii) an adviser;
                  (iii) a merchant banker; or (iv) a non-banking financial
                  company (including a factor) as defined by the Reserve Bank of
                  India Act, 1934. You further agree and acknowledge that
                  BridgeUp is not required to ensure compliance with: (i) Master
                  Direction-Non-Banking Financial Companies &ndash; Peer to Peer
                  Lending Platform (Reserve Bank) Directions, 2017; (ii)
                  Factoring Regulation Act, 2011; (iii) Securitisation and
                  Reconstruction of Financial Assets and Enforcement of Security
                  Interest Act, 2002; (iv) Securities Contracts (Regulation)
                  Act, 1956; (v) Section 11AA - Collective Investment Scheme,
                  SEBI Act, 1992; (vi) SEBI (Investment Advisers) Regulations,
                  2013; and (vii) SEBI (Custodian of Securities) Regulations,
                  1996.
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  BridgeUp does not make any representations or warranties on or
                  about the accuracy and durability of the third-party services
                  or products offered to you through the Platform. BridgeUp does
                  not warrant, nor will be in any way responsible for the
                  legality, efficacy, correctness, or suitability of the privacy
                  policies or of any other information related to or pertaining
                  to the third-party services or products. BridgeUp assumes that
                  you have reviewed the policies of these third parties and that
                  you are in agreement with the same.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  It is expressly clarified that any third-party platforms and
                  services made available on the Platform are the properties of
                  their respective owners, and your use of the same shall be
                  governed by the specific end user licence agreements and
                  policies executed by you with such third parties. You are
                  independently bound by the respective terms of use and privacy
                  policies of all such third-parties, as amended from time to
                  time. BridgeUp assumes no responsibility for any change in the
                  terms of use of any such third-party platforms made available
                  via plug ins or otherwise integrated with the Platform at any
                  time whatsoever. BridgeUp will neither be held liable nor
                  responsible for any commissions or omissions of the
                  third-party vendors or platforms.{' '}
                </span>
              </li>
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You represent and warrant that all information and documents
                  provided by you and any representations made by you, including
                  but not limited to your name, e-mail address, and any other
                  financial and banking related information are genuine,
                  accurate and in compliance with all applicable laws.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">No Liability </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  To the extent permitted by applicable law, BridgeUp and our
                  subsidiaries, affiliates, officers, employees, agents,
                  partners, and licensors shall not be liable for any damages,
                  or any loss of profits or revenues, whether incurred directly
                  or indirectly, or any loss of data, use, goodwill or other
                  intangible losses, resulting from:{' '}
                </span>
              </li>
            </ol>
            <ol className="c4 lst-kix_list_1-1 start">
              <li className="c3 c16 li-bullet-0">
                <span className="c6 c1">
                  Your access to or inability to access the Platform (including
                  investments made or monies raised through such acess);{' '}
                </span>
              </li>
              <li className="c3 c16 li-bullet-0">
                <span className="c6 c1">
                  Any act, conduct and, or, omission of any third-party in
                  relation to or through the Platform including without
                  limitation, any malpractice, misrepresentation, defamation,
                  sedition, offensive or illegal conduct of other users or
                  third-parties; or{' '}
                </span>
              </li>
              <li className="c3 c16 li-bullet-0">
                <span className="c6 c1">
                  Any unauthorised access, use or alteration of your
                  transmissions or content on the Platform.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c8 c1">Indemnification</span>
              <span className="c6 c1">&nbsp;</span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  You agree to indemnify and hold BridgeUp and our subsidiaries,
                  affiliates, officers, agents, employees, partners, and
                  licensors harmless from any claim or demand, including but not
                  limited to reasonable attorney&rsquo;s fees, made by any
                  third-party due to your access of the Platform, your violation
                  of the Terms, Privacy Policy, and any other terms and
                  conditions communicated to you by BridgeUp from time to time.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">
                Changes to Terms and Conditions and Assignment{' '}
              </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c6 c1">
                  BridgeUp may at its sole discretion amend or restate the Terms
                  and, or, implement new Terms. You are recommended to
                  periodically review these Terms and the for the most recent
                  version. Such changes will be effective immediately upon being
                  published on the Platform. Your continued access to the
                  Platform will indicate your acceptance of the last version of
                  the Terms and the Privacy Policy as published on the Platform.
                  If you do not agree to the change(s) made to the Terms and,
                  or, the Privacy Policy, you must immediately cease your access
                  to the Platform.{' '}
                </span>
              </li>
            </ol>
            <p className="c3">
              <span className="c11 c8 c1">Contact Us </span>
            </p>
            <ol className="c4 lst-kix_list_1-0">
              <li className="c3 c5 li-bullet-0">
                <span className="c1">
                  To find more information about service offerings of BridgeUp
                  or if you need assistance for accessing the Platform, you may
                  reach out to us at{' '}
                </span>
                <span className="c17 c1">
                  <a className="c9" href="mailto:contact@bridgeup.com">
                    contact@bridgeup.com
                  </a>
                </span>
                <span className="c17 c1">. </span>
              </li>
            </ol>
            <p className="c3 c12">
              <span className="c6 c1"></span>
            </p>
            <p className="c14">
              <span className="c1">
                The Terms and Conditions were last updated on 28 Sep 2021 at
                17:30
              </span>
              <span className="c6 c1">.</span>
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Terms;